/*
import * as THREE from "three";
import '@tensorflow/tfjs-backend-webgl';
import * as poseDetection from '@tensorflow-models/pose-detection';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {VRM, VRMSchema} from '@pixiv/three-vrm';

window.addEventListener("DOMContentLoaded", () => {


    const canvas = document.getElementById('canvas');
    const webacamCanvas = <HTMLCanvasElement> document.getElementById("webacamCanvas");
    const webcamCtx = webacamCanvas.getContext("2d");
    const video = <HTMLVideoElement> document.getElementById('video');

    let poseStore = {};
    let poseStore3D = {};

    let vertices = [];

    function detectAndDraw(net) {
        webcamCtx.drawImage(video, 0, 0, 640, 480);

        net.estimatePoses(video)
        .then(function(poses){
            // keypoints2D => (name, score, x, y)
            // keypoints3D => (name, score, x, y, z)
            drawKeypoints(poses[0]);
            drawKeypoints3D(poses[0]);
        })
        
    }

    function drawKeypoints3D(pose){
        console.log(pose);
        pose.keypoints3D.forEach(keypoint => {
            if (keypoint.score > 0.4){
                poseStore3D[keypoint.name] = {
                    x: keypoint.x,
                    y: keypoint.y,
                    z: keypoint.z
                }

                vertices.push(keypoint.x, keypoint.y, keypoint.z);
            }
        })

        console.log(poseStore3D);
    }

    function drawKeypoints(pose) {
        // console.log(pose.keypoints);
        pose.keypoints.forEach(keypoint => {
            if (keypoint.score > 0.4) {
                // 考えやすいように見た目通りに座標変換
                // 中心を原点として左右反転
                // 左側に表示されている手が左手になる
                poseStore[keypoint.name] = {
                    x: 640/2 - keypoint.x,
                    y: 480/2 - keypoint.y
                };

                webcamCtx.beginPath();
                webcamCtx.fillStyle = "rgb(255, 255, 0)"; // 黄色
                webcamCtx.arc(
                    keypoint.x,
                    keypoint.y,
                    5,
                    (10 * Math.PI) / 180,
                    (80 * Math.PI) / 180,
                    true
                );
                webcamCtx.fill();
                webcamCtx.fillText(
                    keypoint.name,
                    keypoint.x,
                    keypoint.y + 10
                );
            }
        });
    }

    navigator.mediaDevices.getUserMedia({ audio: false, video: true })
        .then(function (mediaStream) {
            // videoタグのsrcObjectにセット
            video.srcObject = mediaStream;
            video.onloadedmetadata = function (e) {
                video.play();
            };
            
            return poseDetection.createDetector(poseDetection.SupportedModels.BlazePose, {runtime: "tfjs"})
        })
        .then(function (net) {
                var loadingIndicator = document.getElementById("loading-indicator");
                loadingIndicator.style.display = 'none';
                setInterval(function () { detectAndDraw(net); }, 100);
        });
    

        const scene = new THREE.Scene()

        // レンダラの作成、DOMに追加
        const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 1, 100);
        camera.position.set(0, 1, 3);
    
        
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
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.target.set(0, 1, 0);
        controls.update();

        let currentVrm = undefined;
        new GLTFLoader().load("./Victoria_Rubin.vrm", (gltf) => {
            VRM.from(gltf).then((vrm) => {
                scene.add(vrm.scene);
                currentVrm = vrm;
                vrm.humanoid.getBoneNode( VRMSchema.HumanoidBoneName.Hips ).rotation.y = Math.PI;
                
            })
        });

        const gridHelper = new THREE.GridHelper( 10, 10 );
        scene.add( gridHelper );

        const axesHelper = new THREE.AxesHelper( 5 );
        scene.add( axesHelper );

        // animate
        const clock = new THREE.Clock();

        const render = () => {
            renderer.render(scene, camera);
            requestAnimationFrame(render);

            const deltaTime = clock.getDelta();

            if (currentVrm){
                if (poseStore3D){
                    if (poseStore3D["left_shoulder"]){
                        currentVrm.humanoid.getBoneNode( VRMSchema.HumanoidBoneName.LeftShoulder ).position.x = poseStore3D["left_shoulder"]["x"];
                        currentVrm.humanoid.getBoneNode( VRMSchema.HumanoidBoneName.LeftShoulder ).position.y = poseStore3D["left_shoulder"]["y"];
                        currentVrm.humanoid.getBoneNode( VRMSchema.HumanoidBoneName.LeftShoulder ).position.z = poseStore3D["left_shoulder"]["z"];
                    }
                    
                }
            }
        }

        render();
})
*/

/*
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {VRM, VRMSchema} from '@pixiv/three-vrm';

import * as tfjs from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';
import * as posenet from '@tensorflow-models/posenet';


const humanoidBone = {
    "hips": 0,
    "leftUpperLeg": 1,
    "rightUpperLeg": 2,
    "leftLowerLeg": 3,
    "rightLowerLeg": 4,
    "leftFoot": 5,
    "rightFoot": 6,
    "spine": 7,
    "chest": 8,
    "neck": 9,
    "head": 10,
    "leftShoulder": 11,
    "rightShoulder": 12,
    "leftUpperArm": 13,
    "rightUpperArm": 14,
    "leftLowerArm": 15,
    "rightLowerArm": 16,
    "leftHand": 17,
    "rightHand": 18,
    "leftToes": 19,
    "rightToes": 20,
    "leftEye": 21,
    "rightEye": 22,
    "jaw": 23,
    "leftThumbProximal": 24,
    "leftThumbIntermediate": 25,
    "leftThumbDistal": 26,
    "leftIndexProximal": 27,
    "leftIndexIntermediate": 28,
    "leftIndexDistal": 29,
    "leftMiddleProximal": 30,
    "leftMiddleIntermediate": 31,
    "leftMiddleDistal": 32,
    "leftRingProximal": 33,
    "leftRingIntermediate": 34,
    "leftRingDistal": 35,
    "leftLittleProximal": 36,
    "leftLittleIntermediate": 37,
    "leftLittleDistal": 38,
    "rightThumbProximal": 39,
    "rightThumbIntermediate": 40,
    "rightThumbDistal": 41,
    "rightIndexProximal": 42,
    "rightIndexIntermediate": 43,
    "rightIndexDistal": 44,
    "rightMiddleProximal": 45,
    "rightMiddleIntermediate": 46,
    "rightMiddleDistal": 47,
    "rightRingProximal": 48,
    "rightRingIntermediate": 49,
    "rightRingDistal": 50,
    "rightLittleProximal": 51,
    "rightLittleIntermediate": 52,
    "rightLittleDistal": 53,
    "upperChest": 54,
    "lastBone": 55
}


window.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('canvas');
    const webacamCanvas = <HTMLCanvasElement> document.getElementById("webacamCanvas");
	const webcamCtx = webacamCanvas.getContext("2d");
    const video = <HTMLVideoElement> document.getElementById('video');

    let poseStore = {};

    function detectAndDraw(net) {
        webcamCtx.drawImage(video, 0, 0, 640, 480);

        
        net.estimateSinglePose(video, {
            flipHorizontal: false
        })
        .then(function(pose) {
            drawKeypoints(pose);
        });
        
    }
    // カメラ映像にPoseNetで検出した部位のポイントを描画
    function drawKeypoints(pose) {
        pose.keypoints.forEach(keypoint => {
            if (keypoint.score > 0.4) {
                // console.log(keypoint);
                // 考えやすいように見た目通りに座標変換
                // 中心を原点として左右反転
                // 左側に表示されている手が左手になる
                poseStore[keypoint.part] = {
                    x: 640/2 - keypoint.position.x,
                    y: 480/2 - keypoint.position.y
                };

                webcamCtx.beginPath();
                webcamCtx.fillStyle = "rgb(255, 255, 0)"; // 黄色
                webcamCtx.arc(
                    keypoint.position.x,
                    keypoint.position.y,
                    5,
                    (10 * Math.PI) / 180,
                    (80 * Math.PI) / 180,
                    true
                );
                webcamCtx.fill();
                webcamCtx.fillText(
                    keypoint.part,
                    keypoint.position.x,
                    keypoint.position.y + 10
                );
            }
        });

        // console.log(poseStore);
    }

    // カメラ映像を取得
	navigator.mediaDevices.getUserMedia({ audio: false, video: true })
	.then(function (mediaStream) {
        // videoタグのsrcObjectにセット
		video.srcObject = mediaStream;
		video.onloadedmetadata = function (e) {
            video.play();
        };
        return posenet.load();
        // return poseDetection.createDetector(poseDetection.SupportedModels.BlazePose, {runtime: "mediapipe"})
	})
	.then(function (net) {
			var loadingIndicator = document.getElementById("loading-indicator");
			loadingIndicator.style.display = 'none';
			setInterval(function () { detectAndDraw(net); }, 100);
	});

    const scene = new THREE.Scene()

    // レンダラの作成、DOMに追加
    const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 1, 100);
    camera.position.set(0, 1, 3);

    
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
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 1, 0);
    controls.update();

    // VRMのファイルをロード
    let currentVrm = undefined;
    new GLTFLoader().load("./Victoria_Rubin.vrm", (gltf) => {
        VRM.from(gltf).then((vrm) => {
            scene.add(vrm.scene);
            currentVrm = vrm;
            vrm.humanoid.getBoneNode( VRMSchema.HumanoidBoneName.Hips ).rotation.y = Math.PI;
            
            // console.log( vrm );
        })
    });

    const gridHelper = new THREE.GridHelper( 10, 10 );
	scene.add( gridHelper );

	const axesHelper = new THREE.AxesHelper( 5 );
	scene.add( axesHelper );

	// animate
	const clock = new THREE.Clock();

	let angleStore = [];

	// X軸からの角度
	// 反時計回りにプラス。
	function getAngleFromX(pos2, pos1) {
		return Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x);
	}


    // レンダリング
    const render = () => {
        renderer.render(scene, camera);
        requestAnimationFrame(render);

        const deltaTime = clock.getDelta();

				if ( currentVrm ) {

					if (poseStore) {
						if (poseStore["leftShoulder"] && poseStore["rightShoulder"]) {
							// spine & shoulder
							let angle = getAngleFromX(poseStore["rightShoulder"], poseStore["leftShoulder"]);
							if (angle !== null) {
								angle = angle * -1;
								angleStore["Spine"] = angle;
								currentVrm.humanoid.getBoneNode( VRMSchema.HumanoidBoneName.Spine ).rotation.z = angle;
							}
						}
						if (poseStore["leftEye"] && poseStore["rightEye"]) {
							// neck $ eyes
							let angle = getAngleFromX(poseStore["rightEye"], poseStore["leftEye"]);
							if (angle !== null) {
								angle = angle * -1;
								angleStore["Neck"] = angle;
								angle = angle - (angleStore["Spine"] || 0);
								currentVrm.humanoid.getBoneNode( VRMSchema.HumanoidBoneName.Neck ).rotation.z = angle;
							}
						}
						if (poseStore["leftShoulder"] && poseStore["leftElbow"]) {
							// arms
							let angle = getAngleFromX(poseStore["leftElbow"], poseStore["leftShoulder"]);
							if (angle !== null) {
								angle = Math.PI - angle;
								angleStore["RightUpperArm"] = angle;
								angle = angle - (angleStore["Spine"] || 0);
                                currentVrm.humanoid.getBoneNode( VRMSchema.HumanoidBoneName.RightUpperArm ).rotation.z = angle;
							}
						}
						if (poseStore["leftWrist"] && poseStore["leftElbow"]) {
							// arms
							let angle = getAngleFromX(poseStore["leftWrist"], poseStore["leftElbow"]);
							if (angle !== null) {
								angle = Math.PI - angle;
								angleStore["RightLowerArm"] = angle;
								angle = angle - (angleStore["RightUpperArm"] || 0);
								currentVrm.humanoid.getBoneNode( VRMSchema.HumanoidBoneName.RightLowerArm ).rotation.z = angle;
							}
						}
						if (poseStore["rightShoulder"] && poseStore["rightElbow"]) {
							// arms
							let angle = getAngleFromX(poseStore["rightElbow"], poseStore["rightShoulder"]);
							if (angle !== null) {
								angle = angle * -1;
								angleStore["LeftUpperArm"] = angle;
								angle = angle - (angleStore["Spine"] || 0);
								currentVrm.humanoid.getBoneNode( VRMSchema.HumanoidBoneName.LeftUpperArm ).rotation.z = angle;
							}
						}
						if (poseStore["rightWrist"] && poseStore["rightElbow"]) {
							// arms
							let angle = getAngleFromX(poseStore["rightWrist"], poseStore["rightElbow"]);
							if (angle !== null) {
								angle = angle * -1;
								angleStore["LeftLowerArm"] = angle;
								angle = angle - (angleStore["LeftUpperArm"] || 0);
								currentVrm.humanoid.getBoneNode( VRMSchema.HumanoidBoneName.LeftLowerArm ).rotation.z = angle;
							}
						}
					}

					// update vrm
					currentVrm.update( deltaTime );

				}

				renderer.render( scene, camera );

    };
    render();
})


*/
