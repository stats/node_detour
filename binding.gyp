{
    "targets": [
        {
            "target_name": 'addon',
            "include_dirs": [
                "./Detour/Include",
                "<!@(node -p \"require('node-addon-api').include\")"
            ],
            'dependencies': [
                "<!(node -p \"require('node-addon-api').gyp\")"
            ],
            "sources": [
                './Detour/Source/DetourAlloc.cpp',
                "./Detour/Source/DetourAssert.cpp",
                './Detour/Source/DetourCommon.cpp',
                './Detour/Source/DetourNavMesh.cpp',
                './/Detour/Source/DetourNavMeshBuilder.cpp',
                './Detour/Source/DetourNavMeshQuery.cpp',
                './Detour/Source/DetourNode.cpp',
                './src/Pathfinder.cc',
                './src/addon.cc'
            ],
            'cflags!': [ '-fno-exceptions' ],
            'cflags_cc!': [ '-fno-exceptions' ],
            'xcode_settings': {
                'GCC_ENABLE_CPP_EXCEPTIONS': 'YES',
                'CLANG_CXX_LIBRARY': 'libc++',
                'MACOSX_DEPLOYMENT_TARGET': '10.7',
            },
            'msvs_settings': {
                'VCCLCompilerTool': { 'ExceptionHandling': 1 },
            },
        }
    ]
}
