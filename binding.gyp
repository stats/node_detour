{
    "targets": [
        {
            "target_name": 'addon',
            "include_dirs": [
                "./Detour/Include"
            ],
            "sources": [
                './Detour/Source/DetourAlloc.cpp',
                "./Detour/Source/DetourAssert.cpp",
                './Detour/Source/DetourCommon.cpp',
                './Detour/Source/DetourNavMesh.cpp',
                './/Detour/Source/DetourNavMeshBuilder.cpp',
                './Detour/Source/DetourNavMeshQuery.cpp',
                './Detour/Source/DetourNode.cpp',
                './src/FindPath.cpp'
            ]
        }
    ]
}
