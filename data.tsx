import { IProject, IServices, ISkill } from './type'
import {RiComputerLine} from 'react-icons/ri'
import {FaServer} from 'react-icons/fa'
import {AiOutlineAntDesign, AiOutlineApi,} from 'react-icons/ai'
import {BsCircleFill, BsCircleHalf} from 'react-icons/bs'

export const services:IServices[] = [
    {
       Icon: RiComputerLine,
       title: "Frotend Development",
       about: "I can build a beatiful and scable SPA | MPA using  HTML ,Css/Sass, Typescript,and REACT.JS ...",

    },
    {
        Icon: FaServer,
        title:"Backend Development",
        about:"Database, Server, API & other populer framework ",
       
    },
    {
        Icon: AiOutlineApi,
        title:"Api Development",
        about:"I can developer Api using <b>API</b> & <b> Node </b>",
       
    },
    {
        Icon: AiOutlineAntDesign,
        title:"UI / UX Design",
        about:"Stunning user interface designer using <b>Figma</b> and <b> Framer</b>",
       
    },
]

export const languages:ISkill[] = [
    {
        name:"Python",
        level: "45%",
        Icon: BsCircleHalf
    },
    {
        name:"TypeScript",
        level: "70%",
        Icon: BsCircleFill
    },
    {
        name:"Boostrap",
        level: "77%",
        Icon: BsCircleHalf
    },
    {
        name:"Java",
        level: "40%",
        Icon:  BsCircleFill
    },
      {
        name:"Ionic",
        level: "75%",
        Icon:  BsCircleHalf
    },
    {
        name:"Flutter",
        level: "74%",
        Icon: BsCircleFill
    },
]

export const tools:ISkill[] = [
    {
        name:"Figma",
        level: "70%",
        Icon: BsCircleHalf
    },
    {
        name:"Framer",
        level: "50%",
        Icon: BsCircleHalf
    },
]

export const projects:IProject[] = [
    {
        id:1,
      name: "Mobile",
      image_path: "/image/ionic1.png",
      deployed_url: "https://play.google.com/store/apps/details?id=com.kanze.reload.app",
      github_url: "",
      category: ["ionic",],
      description:
        "This my first  project Mobile",
      key_techs: ["ionic", "Angular", "Java", "Typescript",],
    },
    {
        id:2,
      name: "Design",
      image_path: "/image/comingsoon.png",
      deployed_url: "",
      github_url: "",
      category: ["Design UI",],
      description:
        "Coming soon",
      key_techs: ["Design",],
    },
]