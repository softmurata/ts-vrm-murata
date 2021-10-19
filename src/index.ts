import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { VRM, VRMSchema } from '@pixiv/three-vrm'

import * as tfjs from '@tensorflow/tfjs'
import '@tensorflow/tfjs-backend-webgl'
import * as posenet from '@tensorflow-models/posenet'

//モデルの位置
const posX = 0
const posY = 0
const posZ = 0
//モデルのサイズ
const scale = 1.0

window.addEventListener('DOMContentLoaded', () => {
  // animate
  const clock = new THREE.Clock()

  const canvas = document.getElementById('canvas')
  const webacamCanvas = <HTMLCanvasElement>(
    document.getElementById('webacamCanvas')
  )
  const webcamCtx = webacamCanvas.getContext('2d')
  const video = <HTMLVideoElement>document.getElementById('video')

  const videoWidth = 1080
  const videoHeight = 720

  console.log(videoWidth, videoHeight)

  const scene = new THREE.Scene()

  // レンダラの作成、DOMに追加
  const camera = new THREE.PerspectiveCamera(
    45,
    canvas.clientWidth / canvas.clientHeight,
    1,
    100
  )
  camera.position.set(0, 1, 3)

  // レンダラーの生成
  const renderer = new THREE.WebGLRenderer()
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)
  renderer.setClearColor(0x7fbfff, 1.0)
  canvas.appendChild(renderer.domElement)

  // ライトの生成
  const light = new THREE.DirectionalLight(0xffffff)
  light.position.set(-1, 1, -1).normalize()
  scene.add(light)
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.target.set(0, 1, 0)
  controls.update()

  const gridHelper = new THREE.GridHelper(10, 10)
  scene.add(gridHelper)

  const axesHelper = new THREE.AxesHelper(5)
  scene.add(axesHelper)

  // load model
  let dst = {} // model data
  let currentVrm = undefined
  new GLTFLoader().load('./Victoria_Rubin.vrm', (gltf) => {
    VRM.from(gltf).then((vrm) => {
      vrm.scene.position.set(posX, posY, posZ)
      vrm.scene.scale.set(scale, scale, scale)
      vrm.scene.rotation.set(0.0, Math.PI, 0.0)
      dst['hips'] = vrm.scene.getObjectByName('J_Bip_C_Hips')
      dst['spine'] = vrm.scene.getObjectByName('J_Bip_C_Spine')
      dst['chest'] = vrm.scene.getObjectByName('J_Bip_C_Chest')
      dst['upperChest'] = vrm.scene.getObjectByName('J_Bip_C_UpperChest')
      dst['neck'] = vrm.scene.getObjectByName('J_Bip_C_Neck')
      dst['head'] = vrm.scene.getObjectByName('J_Bip_C_Head')
      dst['upperArmL'] = vrm.scene.getObjectByName('J_Bip_L_UpperArm')
      dst['upperArmR'] = vrm.scene.getObjectByName('J_Bip_R_UpperArm')
      dst['lowerArmL'] = vrm.scene.getObjectByName('J_Bip_L_LowerArm')
      dst['lowerArmR'] = vrm.scene.getObjectByName('J_Bip_R_LowerArm')
      dst['handL'] = vrm.scene.getObjectByName('J_Bip_L_Hand')
      dst['handR'] = vrm.scene.getObjectByName('J_Bip_R_Hand')
      dst['upperLegL'] = vrm.scene.getObjectByName('J_Bip_L_UpperLeg')
      dst['upperLegR'] = vrm.scene.getObjectByName('J_Bip_R_UpperLeg')
      dst['lowerLegL'] = vrm.scene.getObjectByName('J_Bip_L_LowerLeg')
      dst['lowerLegR'] = vrm.scene.getObjectByName('J_Bip_R_LowerLeg')
      dst['footL'] = vrm.scene.getObjectByName('J_Bip_L_Foot')
      dst['footR'] = vrm.scene.getObjectByName('J_Bip_R_Foot')

      scene.add(vrm.scene)
      currentVrm = vrm
    })
  })

  let src = {}
  let joint = {}

  function createJoint(net) {
    if (Object.keys(dst).length == 0) {
      return
    }

    webcamCtx.drawImage(video, 0, 0, videoWidth, videoHeight)

    net
      .estimateSinglePose(video, {
        flipHorizontal: false,
      })
      .then((pose) => {
        let poses = []
        poses.push(pose)

        let minPoseConfidence = 0.4
        let minPartConfidence = 0.4

        // restore pose
        poses.forEach(({ score, keypoints }) => {
          // show video
          if (score < minPoseConfidence) {
            return
          }

          src['nose'] = keypoints[0]
          src['eyeL'] = keypoints[1]
          src['eyeR'] = keypoints[2]
          src['earL'] = keypoints[3]
          src['earR'] = keypoints[4]
          src['upperArmL'] = keypoints[5]
          src['upperArmR'] = keypoints[6]
          src['lowerArmL'] = keypoints[7]
          src['lowerArmR'] = keypoints[8]
          src['handL'] = keypoints[9]
          src['handR'] = keypoints[10]
          src['upperLegL'] = keypoints[11]
          src['upperLegR'] = keypoints[12]
          src['lowerLegL'] = keypoints[13]
          src['lowerLegR'] = keypoints[14]
          src['footL'] = keypoints[15]
          src['footR'] = keypoints[16]

          Object.keys(src).forEach((key) => {
            if (src[key].score > minPartConfidence) {
              //PoseNetの機能強化あるいは他の姿勢推定ライブラリに切り替えられるようVector3で作っておく
              joint[key] = new THREE.Vector3(
                src[key].position.x,
                videoHeight - src[key].position.y,
                0
              )
            }
          })
        })
      })
  }

  // load video
  navigator.mediaDevices
    .getUserMedia({ audio: false, video: true })
    .then(function (mediaStream) {
      // videoタグのsrcObjectにセット
      video.srcObject = mediaStream

      video.onloadedmetadata = function (e) {
        video.play()
      }

      return posenet.load()
    })
    .then((net) => {
      let loadiningIndicator = document.getElementById('loading-indicator')
      loadiningIndicator.style.display = 'none'

      setInterval(function () {
        createJoint(net)
      }, 300)
    })

  const render = () => {
    renderer.render(scene, camera)
    requestAnimationFrame(render)

    const deltaTime = clock.getDelta()

    if (currentVrm) {
      if (joint) {
        // console.log(joint);
        const vecX = new THREE.Vector3(1, 0, 0)
        const vecY = new THREE.Vector3(0, 1, 0)
        const vecZ = new THREE.Vector3(0, 0, 1)
        const halfPi = Math.PI / 2

        const deg2rad = (deg) => {
          return (deg * Math.PI) / 180.0
        }
        const rad2deg = (rad) => {
          return (rad * 180.0) / Math.PI
        }

        const updateJoint = (
          src,
          root,
          node,
          leaf,
          dst,
          min = -360,
          max = 360
        ) => {
          let from = src[leaf].clone().sub(src[node]).normalize()
          let to = src[node].clone().sub(src[root]).normalize()
          let quat = new THREE.Quaternion()
          let axis = from.clone().cross(to).normalize()
          let angle = Math.acos(from.dot(to))
          angle = Math.max(deg2rad(min), Math.min(deg2rad(max), angle))
          quat.setFromAxisAngle(axis, angle)
          dst.rotation.setFromQuaternion(quat)
        }

        const adjJoint = (x, y, z, dst) => {
          let quatX = new THREE.Quaternion()
          quatX.setFromAxisAngle(vecX, deg2rad(x))
          let quatY = new THREE.Quaternion()
          quatY.setFromAxisAngle(vecY, deg2rad(y))
          let quatZ = new THREE.Quaternion()
          quatZ.setFromAxisAngle(vecZ, -deg2rad(z))

          let quat = dst.quaternion
            .multiply(quatZ)
            .multiply(quatY)
            .multiply(quatX)
          dst.rotation.setFromQuaternion(quat)
        }

        //左腕
        // change coordinates into rotation
        if (joint['upperArmL']) {
          if (joint['lowerArmL']) {
            if (joint['upperArmR']) {
              updateJoint(
                joint,
                'upperArmR',
                'upperArmL',
                'lowerArmL',
                dst['upperArmL']
              )
              //adjJoint(0, -30, 0, dst["upperArmL"]); //ダミー
            }
            if (joint['handL']) {
              updateJoint(
                joint,
                'upperArmL',
                'lowerArmL',
                'handL',
                dst['lowerArmL']
              )

              //常に手のひらを向けるよう補正
              let armLow2Hand = joint['handL']
                .clone()
                .sub(joint['lowerArmL'])
                .normalize()
              let angleX = rad2deg(armLow2Hand.y) + 90
              let angleY = Math.min(0, rad2deg(armLow2Hand.x))
              adjJoint(angleX, angleY, 0, dst['lowerArmL'])

              dst['handL'].rotation.setFromQuaternion(new THREE.Quaternion())
              //adjJoint(0, 0, -20, dst["handL"]); //ダミー
            }
          }
        }

        //右腕
        if (joint['upperArmR']) {
          if (joint['lowerArmR']) {
            if (joint['upperArmL']) {
              updateJoint(
                joint,
                'upperArmL',
                'upperArmR',
                'lowerArmR',
                dst['upperArmR']
              )
              //adjJoint(0, 30, 0, dst["upperArmR"]); //ダミー
            }
            if (joint['handR']) {
              updateJoint(
                joint,
                'upperArmR',
                'lowerArmR',
                'handR',
                dst['lowerArmR']
              )

              //常に手のひらを向けるよう補正
              let armLow2Hand = joint['handR']
                .clone()
                .sub(joint['lowerArmR'])
                .normalize()
              let angleX = rad2deg(armLow2Hand.y) + 90
              let angleY = Math.max(0, rad2deg(armLow2Hand.x))
              adjJoint(angleX, angleY, 0, dst['lowerArmR'])

              dst['handR'].rotation.setFromQuaternion(new THREE.Quaternion())
              //adjJoint(0, 0, 20, dst["handR"]); //ダミー
            }
          }
        }

        //胸
        if (joint['upperArmL'] && joint['upperArmR']) {
          joint['upperArmLL'] = joint['upperArmL'].clone().add(vecX)
          updateJoint(
            joint,
            'upperArmLL',
            'upperArmL',
            'upperArmR',
            dst['upperChest'],
            -20,
            20
          )
        }

        //腰
        if (joint['upperLegL'] && joint['upperLegR']) {
          //基準点が無いので左肩の左水平方向に仮のジョイントを作る
          joint['upperLegLL'] = joint['upperLegL'].clone().add(vecX)
          updateJoint(
            joint,
            'upperLegLL',
            'upperLegL',
            'upperLegR',
            dst['spine'],
            -10,
            10
          )

          const adjX = 2.0

          let pos = joint['upperLegL']
            .clone()
            .add(joint['upperLegR'])
            .divideScalar(2)
          let x = -(pos.x - videoWidth / 2) / videoWidth
          dst['hips'].position.x = x * adjX

          //adjJoint(-20, 0, 0, dst["spine"]); //ダミー
        }

        //左脚
        if (joint['upperLegL']) {
          if (joint['lowerLegL']) {
            if (joint['upperLegR']) {
              //基準点が無いので左脚付け根の上方向に仮のジョイントを作る
              joint['upperLegLUp'] = joint['upperLegR']
                .clone()
                .sub(joint['upperLegL'])
                .normalize()
              joint['upperLegLUp']
                .applyAxisAngle(vecZ, -halfPi)
                .add(joint['upperLegL'])
              updateJoint(
                joint,
                'upperLegLUp',
                'upperLegL',
                'lowerLegL',
                dst['upperLegL'],
                -20,
                20
              )
            }
            if (joint['footL']) {
              updateJoint(
                joint,
                'upperLegL',
                'lowerLegL',
                'footL',
                dst['lowerLegL'],
                -20,
                20
              )

              //基準点が無いので左足首の下垂直方向に仮のジョイントを作る
              joint['footLDown'] = joint['footL'].clone().sub(vecY)
              updateJoint(
                joint,
                'lowerLegL',
                'footL',
                'footLDown',
                dst['footL']
              )
            } else {
              //基準点が無いので左膝の下垂直方向に仮のジョイントを作る
              joint['lowerLegLDown'] = joint['lowerLegL'].clone().sub(vecY)
              updateJoint(
                joint,
                'upperLegL',
                'lowerLegL',
                'lowerLegLDown',
                dst['lowerLegL']
              )
              updateJoint(
                joint,
                'lowerLegL',
                'lowerLegLDown',
                'lowerLegLDown',
                dst['footL']
              )
            }
            //adjJoint(0, 10, 0, dst["footL"]); //ダミー
          }
        }

        //右脚
        if (joint['upperLegR']) {
          if (joint['lowerLegR']) {
            if (joint['upperLegL']) {
              //基準点が無いので右脚付け根の上方向に仮のジョイントを作る
              joint['upperLegRUp'] = joint['upperLegL']
                .clone()
                .sub(joint['upperLegR'])
                .normalize()
              joint['upperLegRUp']
                .applyAxisAngle(vecZ, halfPi)
                .add(joint['upperLegR'])
              updateJoint(
                joint,
                'upperLegRUp',
                'upperLegR',
                'lowerLegR',
                dst['upperLegR'],
                -20,
                20
              )
            }
            if (joint['footR']) {
              updateJoint(
                joint,
                'upperLegR',
                'lowerLegR',
                'footR',
                dst['lowerLegR'],
                -20,
                20
              )

              //基準点が無いので右足首の下垂直方向に仮のジョイントを作る
              joint['footRDown'] = joint['footR'].clone().sub(vecY)
              updateJoint(
                joint,
                'lowerLegR',
                'footR',
                'footRDown',
                dst['footR']
              )
            } else {
              //基準点が無いので右膝の下垂直方向に仮のジョイントを作る
              joint['lowerLegRDown'] = joint['lowerLegR'].clone().sub(vecY)
              updateJoint(
                joint,
                'upperLegR',
                'lowerLegR',
                'lowerLegRDown',
                dst['lowerLegR']
              )
              updateJoint(
                joint,
                'lowerLegR',
                'lowerLegRDown',
                'lowerLegRDown',
                dst['footR']
              )
            }
            //adjJoint(0, -10, 0, dst["footR"]); //ダミー
          }
        }
      }

      // currentVrm.update(deltaTime);
    }

    renderer.render(scene, camera)
  }
  render()
})
