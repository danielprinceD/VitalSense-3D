import React from "react";
import { useGraph } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

export function Avatar(props) {
  const group = React.useRef();
  const { scene } = useGLTF("/Model/human.glb");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials, animations } = useGraph(clone);
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Men">
          <primitive object={nodes.mixamorigHips} />
          <primitive object={nodes.Ctrl_Master} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Left} />
          <primitive object={nodes.Ctrl_Hand_IK_Left} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Right} />
          <primitive object={nodes.Ctrl_Hand_IK_Right} />
          <primitive object={nodes.Ctrl_Foot_IK_Left} />
          <primitive object={nodes.Ctrl_LegPole_IK_Left} />
          <primitive object={nodes.Ctrl_Foot_IK_Right} />
          <primitive object={nodes.Ctrl_LegPole_IK_Right} />
          <group name="head">
            <skinnedMesh
              name="Face_Archetype009"
              geometry={nodes.Face_Archetype009.geometry}
              material={materials.face}
              skeleton={nodes.Face_Archetype009.skeleton}
            />
            <skinnedMesh
              name="Face_Archetype009_1"
              geometry={nodes.Face_Archetype009_1.geometry}
              material={materials.eye}
              skeleton={nodes.Face_Archetype009_1.skeleton}
            />
          </group>
          <group name="Mesh_0013">
            <skinnedMesh
              name="Mesh_0015"
              geometry={nodes.Mesh_0015.geometry}
              material={materials["Material_0.001"]}
              skeleton={nodes.Mesh_0015.skeleton}
            />
            <skinnedMesh
              name="Mesh_0015_1"
              geometry={nodes.Mesh_0015_1.geometry}
              material={materials.hand}
              skeleton={nodes.Mesh_0015_1.skeleton}
            />
          </group>
          <skinnedMesh
            name="Mesh_0014"
            geometry={nodes.Mesh_0014.geometry}
            material={materials.Material_0}
            skeleton={nodes.Mesh_0014.skeleton}
          />
        </group>
        <group name="cs_circle_025" scale={0.206} />
        <group name="cs_master" scale={0.1} />
        <group name="cs_square_2" rotation={[-Math.PI, 0, 0]} scale={0.154} />
        <group name="cs_hips" scale={0.206} />
        <group name="cs_thigh_fk" scale={0.822} />
        <group name="cs_calf_fk" scale={0.822} />
        <group name="cs_foot" rotation={[-Math.PI, 0, 0]} scale={0.308} />
        <group name="cs_toe" scale={0.429} />
        <group name="cs_circle" scale={0.206} />
        <group name="cs_neck" scale={0.206} />
        <group name="cs_head" scale={0.206} />
        <group
          name="cs_shoulder_left"
          rotation={[-Math.PI, -Math.PI / 2, 0]}
          scale={1.038}
        />
        <group name="cs_arm_fk" scale={0.822} />
        <group name="cs_forearm_fk" scale={0.822} />
        <group name="cs_hand" rotation={[-Math.PI, 0, 0]} scale={0.308} />
        <group
          name="cs_shoulder_right"
          rotation={[-Math.PI, -Math.PI / 2, 0]}
          scale={1.038}
        />
        <group name="cs_sphere_012" scale={0.206} />
        <group name="cs_foot_01" rotation={[0, Math.PI / 2, 0]} scale={2.186} />
        <group name="cs_foot_roll" scale={0.592} />
      </group>
    </group>
  );
}

useGLTF.preload("/Model/human.glb");
