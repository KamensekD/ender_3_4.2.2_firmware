module.exports = {

    board_env: "STM32F103RE_creality",
    //active: false,    // disable this build
    //only: "stable",   // build only stable or nightly branch
    //only: "nightly",   // build only stable or nightly branch
    meta: {
        stable_name: "ender3pro_v4.2.2_M{{marlin_version}}-base-{{current_date}}",
        nightly_name: "ender3pro_v4.2.2_M2.1.x-bugfix-base-{{current_date}}"
    },
//        stable_name: "ender3pro_v4.2.2_M2.0.9.7-base-{{current_date}}",
//        nightly_name: "ender3pro_v4.2.2_{{current_date}}-base-{{uid}}"
//        nightly_name: "ender3pro_v4.2.2_{{marlin_version}}-base-{{current_date}}"
    

// Creating builds based on other's configurations:
// Most of the time, you will base your builds on Marlin's example configurations but you might want to use an existing modified build that someone else made and just add some more changes on top.
// For example:
// based_on: {
//     repo: "https://github.com/some_user/some_repo",
//     path: "/autogeneratedConfigs/the_build/{{releaseType}}/latest",
//     stable_branch: "master",
//     nightly_branch: "master"
// }
// The {{releaseType}} variable will be either stable or nightly depending on what's currently building.
// Instead of using latest you can point to the currently building marlin version by using {{marlin_version}}
// or hard-code a specific version that you want. Using latest is recommended.

//    based_on: {   // default Ender-3 Pro Marlin example config
//        repo: "https://github.com/MarlinFirmware/Configurations/",
//        path: "/config/examples/Creality/Ender-3 Pro/CrealityV422/",
//        stable_branch: "release-2.1.2",   // latest stable
//        nightly_branch: "bugfix-2.1.x"    // latest nightly
//        repo: "https://github.com/zisismaras/ender_3_4.2.2_firmware",
//        path: "/autogeneratedConfigs/baseLin/{{releaseType}}/latest",  // {{releaseType}} will be either stable or nightly
//        stable_branch: "master",
//        nightly_branch: "master"
//    },



    

    based_on: {   // default Ender-3 Pro Marlin example config
        repo: "https://github.com/MarlinFirmware/Configurations/",
        path: "/config/examples/Creality/Ender-3 Pro/CrealityV422/",

        stable_branch: "release-{{marlin_version}}",   // latest stable
        nightly_branch: "bugfix-2.1.x"                 // latest nightly
    },
//        stable_branch: "release-2.0.9.7",              // doesn't seem to work
//        stable_branch: "release-2.1.2.1",              // doesn't seem to work


    configuration:     {   // "Configuration.h" customizations
        enable: [


//            ["STRING_CONFIG_H_AUTHOR", "(Ender-3 Pro)"],

        ]
    },
    
    
    
    configuration_adv: {   // "Configuration_adv.h" customizations
        enable: [


        ]
    }
};
