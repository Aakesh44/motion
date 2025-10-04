import alienxP from "@/public/ben10/Alien_X-profile.webp";
import alienxA from "@/public/ben10/Alien_X-profile.webp";
import bigchillP from "@/public/ben10/Big_chill-profile.webp";
import bigchillA from "@/public/ben10/Big_Chill-action.webp";
import brainStormP from "@/public/ben10/Brainstorm-profile.webp";
import brainStormA from "@/public/ben10/Brainstorm-action.webp";
import chromaStoneP from "@/public/ben10/Chromastone-profile.webp";
import chromaStoneA from "@/public/ben10/Chromastone-action.webp";
import echoP from "@/public/ben10/Echo-profile.webp";
import echoA from "@/public/ben10/Echo-action.webp";
import goopP from "@/public/ben10/Goop-profile.webp";
import goopA from "@/public/ben10/Goop-action.webp";
import humungousaurP from '@/public/ben10/Humungousaur-profile.webp';
import humungousaurA from '@/public/ben10/Humungousaur-action.webp';
import jetrayP from '@/public/ben10/Jetray-profile.webp';
import jetrayA from '@/public/ben10/Jetray-action.webp';
import swampFire from '@/public/ben10/Swampfire-profile.webp';
import swampFireA from '@/public/ben10/Swampfire-action.webp';

const bgs = [
  "rgba(206, 208, 205, 1)", // #ced0cd
  "rgba(68, 203, 255, 1)",  // #44cbff
  "rgba(246, 149, 29, 1)",  // #f6951d
  "rgba(242, 119, 204, 1)", // #f277cc
  "rgba(147, 203, 39, 1)",  // #93cb27
  "rgba(198, 168, 96, 1)",  // #c6a860
  "rgba(171, 36, 52, 1)",   // #ab2434
  "rgba(106, 130, 56, 1)",  // #6a8238
];

const colors =  ['#ced0cd', '#44cbff', '#f6951d', '#f277cc', '#93cb27', '#c6a860', '#ab2434', '#6a8238']

const ALIENS = [
    {
        name: "Alien X",
        profile_img: '/ben10/Alien_X-profile.webp',
        action_img: '/ben10/Alien_X-action.webp',
        description: "Alien X is a Celestialsapien, a godlike being with reality-warping abilities, time manipulation, and near invulnerability. However, every action requires the agreement of his three internal personalities, making him powerful but difficult to use.",
    },
    {
        name: "Big Chill",
        profile_img: '/ben10/Big_chill-profile.webp',
        action_img: '/ben10/Big_Chill-action.webp',
        description: "Big Chill is a moth-like Necrofriggian who can turn intangible, invisible, and unleash freezing ice breath. He thrives in extreme cold, can pass through solid matter, and has natural stealth abilities.",
    },
    {
        name: "Brainstorm",
        profile_img: '/ben10/Brainstorm-profile.webp',
        action_img: '/ben10/Brainstorm-action.webp',
        description: "Brainstorm is a hyper-intelligent Cerebrocrustacean with a crab-like exoskeleton. He can generate and manipulate electricity, calculate complex strategies instantly, and use his armored shell for protection.",
    },
    {
        name: "Chromastone",
        profile_img: '/ben10/Chromastone-profile.webp',
        action_img: '/ben10/Chromastone-action.webp',
        description: "Chromastone is a Crystalsapien composed of nearly indestructible crystal. He can absorb and channel energy into devastating blasts, refract light into lasers, and withstand massive physical and energy-based attacks.",
    },
    {
        name: "Goop",
        profile_img: '/ben10/Goop-profile.webp',
        action_img: '/ben10/Goop-action.webp',
        description: "Goop is a shape-shifting Polymorph made entirely of green slime, controlled by an anti-gravity projector. He can stretch, reshape, or liquefy his body, making him nearly impossible to harm physically.",
    },
    {
        name: "Humungousaur",
        profile_img: '/ben10/Humungousaur-profile.webp',
        action_img: '/ben10/Humungousaur-action.webp',
        description: "Humungousaur is a dinosaur-like Vaxasaurian known for his colossal strength and durability. He can increase his size up to 60 feet, amplifying his power and making him a near-unstoppable brute force in battle.",
    },
    {
        name: "Jetray",
        profile_img: '/ben10/Jetray-profile.webp',
        action_img: '/ben10/Jetray-action.webp',
        description: "Jetray is a red, manta ray-like Aerophibian who can fly at supersonic speeds and swim effortlessly underwater. He fires powerful neuroshock blasts from his eyes and tail, making him both fast and deadly.",
    },
    {
        name: "Swampfire",
        profile_img: '/ben10/Swampfire-profile.webp',
        action_img: '/ben10/Swampfire-action.webp',
        description: "Swampfire is a plant-based Methanosian who can regenerate lost limbs, control vegetation, and emit explosive fire blasts. His combination of regeneration, strength, and elemental control makes him versatile in combat.",
    }
]?.map((a, i)=> ({...a, bg: bgs[i], color: colors[i]}));


export { ALIENS };