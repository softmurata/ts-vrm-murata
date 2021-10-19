import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { VRM, VRMSchema } from '@pixiv/three-vrm'

const faceExpressions = require('./jeelizFaceExpressions.js') // import .module.js
const neuralNetworkModel = require('./jeelizFaceExpressionsNNC.json')
// 顔認識の開始
const startFaceTransfer = () => {
  console.log(faceExpressions)
  // 顔認識の初期化
  faceExpressions.init({
    canvasId: 'faceCanvas',
    NNC: neuralNetworkModel,
    callbackReady: (errCode: any) => {
      if (errCode) {
        console.log('initFaceTransfer Error:', errCode)
        return
      }
    },
  })
}

let head
let neck
let spine

let blendShapeProxy

// show vrm
const showVRM = () => {
  const canvas = document.getElementById('canvas')

  // generate scene
  const scene = new THREE.Scene()

  // generate camera
  const camera = new THREE.OrthographicCamera(
    -0.32,
    +0.32,
    0.24,
    -0.24,
    0.1,
    1000
  )
  camera.position.set(0, 1.4, -0.6)
  camera.rotation.set(0, Math.PI, 0)

  // generate renderer
  const renderer = new THREE.WebGLRenderer()
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)
  renderer.setClearColor(0x7fbfff, 1.0)
  canvas.appendChild(renderer.domElement)

  // generate light
  const light = new THREE.DirectionalLight(0xffffff)
  light.position.set(-1, 1, -1).normalize()
  scene.add(light)

  const loader = new GLTFLoader()

  loader.load('./Victoria_Rubin.vrm', (gltf) => {
    VRM.from(gltf).then((vrm) => {
      scene.add(vrm.scene)

      // get bone node
      head = vrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.Head)
      neck = vrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.Neck)
      spine = vrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.Spine)

      const leftUpperArm = vrm.humanoid.getBoneNode(
        VRMSchema.HumanoidBoneName.LeftUpperArm
      )
      const rightUpperArm = vrm.humanoid.getBoneNode(
        VRMSchema.HumanoidBoneName.RightUpperArm
      )
      leftUpperArm.rotation.z = Math.PI / 3
      rightUpperArm.rotation.z = -Math.PI / 3

      // get blendshape
      blendShapeProxy = vrm.blendShapeProxy

      startFaceTransfer()
    })
  })

  const updateFaceRotation = (faceRotation: Array<number>) => {
    const headW = 0.8
    const neckW = 0.2
    const spineW = 0.1

    // 頭
    head.rotation.x = faceRotation[0] * headW * -1
    head.rotation.y = faceRotation[1] * headW
    head.rotation.z = faceRotation[2] * headW * -1

    // 首
    neck.rotation.x = faceRotation[0] * neckW * -1
    neck.rotation.y = faceRotation[1] * neckW
    neck.rotation.z = faceRotation[2] * neckW * -1

    // 脊椎
    spine.rotation.x = faceRotation[0] * spineW * -1
    spine.rotation.y = faceRotation[1] * spineW
    spine.rotation.z = faceRotation[2] * spineW * -1
  }

  const updateFaceExpression = (faceExpression: Array<number>) => {
    let joy = Math.round(Math.max(faceExpression[0], faceExpression[1]) * 3) / 3
    blendShapeProxy.setValue(VRMSchema.BlendShapePresetName.Joy, joy)

    // mouse
    blendShapeProxy.setValue(
      VRMSchema.BlendShapePresetName.A,
      faceExpression[6]
    )

    // update
    blendShapeProxy.update()
  }

  // フレーム毎に呼ばれる
  const update = () => {
    if (faceExpressions.ready && faceExpressions.is_detected()) {
      // 頭回転の取得と反映
      const faceRotaion = faceExpressions.get_rotationStabilized()
      updateFaceRotation(faceRotaion)

      // 表情の取得と反映
      const faceExpression =
        faceExpressions.get_morphTargetInfluencesStabilized()
      updateFaceExpression(faceExpression)
    }

    requestAnimationFrame(update)
    renderer.render(scene, camera)
  }

  update()
}

window.addEventListener('DOMContentLoaded', () => {
  showVRM()
})
