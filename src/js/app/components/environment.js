import * as THREE from 'three';

import Config from '../../data/config';

export default class Environment {
    constructor() {
        console.log(`Environment: Scale: ${scene_scale}, arenaSize:${Config.arena.size}`);

        var geometry = new THREE.PlaneBufferGeometry(Config.arena.size, Config.arena.size);
        // var material = new THREE.MeshPhongMaterial({
        var material = new THREE.MeshStandardMaterial({
            color: 0x999999,
            depthWrite: false
        });

        // Ground
        var ground = new THREE.Mesh(geometry, material);
        // ground.rotation.x = -Math.PI / 2;
        ground.rotation.set(-Math.PI / 2, Math.PI / 2, 0);
        ground.position.set(0, 0, 0);
        ground.scale.set(scene_scale, scene_scale, scene_scale);

        // ground.material.opacity = 0.5;
        // ground.receiveShadow = true;
        markerGroup.add(ground);

        // Grid
        var grid = new THREE.GridHelper(Config.arena.size, 18, 0x000000, 0x5b5b5b);
        grid.rotation.set(-Math.PI / 2, Math.PI / 2, 0);
        grid.position.set(0, 0, 0);
        grid.scale.set(scene_scale, scene_scale, scene_scale);

        grid.material.opacity = 0.35;
        grid.material.transparent = true;
        markerGroup.add(grid);
    }
}