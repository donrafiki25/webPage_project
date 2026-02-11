import "../Styles/Portfolio.css";
import webpage_wireframe from "../assets/Images_Portfolio/HomePage_wireframe.png";
import webpage_prototype from "../assets/Images_Portfolio/HomePage_Prototype.png";

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Portfolio(){

    const itemData = [
        {
            img: webpage_wireframe,
            title: "Page wireframe",
        },
        {
            img: webpage_prototype,
            title: "Page HiFi Prototype",
        },
    ]

    return(<div id="portfolio">
        <h1>Portfolio: Rafael Agustín López Hernández</h1>

        <h2>Polyworks Mexico</h2>
        <p id="disclamer">Disclamer: These projects cannot be shown publicly because of Non-Disclosure Agreements (NDA).</p>
        <h3>Migration of a web platform: AngularJS to React + Typescript</h3>
        <ul>
            <li>Working alongside an international team, a front-end migration from AngularJS to ReactJS and Typescript was made.</li>
            <li>This migration achieved the goal of improving the user experience, changing libraries and components to lower the usability complaints.</li>
        </ul>
        <h3>Project of redesigning a web platform</h3>
        <ul>
            <li>Taking the leading role, I was responsible of designing, prototyping and presenting the solution, which received positive feedback from the client.</li>
            <li>The redesign was made using Figma.</li>
            <li>The rollout was developed in steps:</li>
            <ol>
                <li>Write an specification document, to explain the behaviour of the feature, each button, icon and translatable string.</li>
                <li>Design the prototype in Figma, an have two more options if needed.</li>
                <li>Show the prototype to leads.</li>
                <li>Start the feature using Typescript, and CSS using the finished design.</li>
            </ol>
                
        </ul>
        <h3>Creation of design system on Figma</h3>
        <ul>
            <li>I created a design system to help my team in creating faster prototypes for the two main products we had. Both products were web based.</li>
            <li>The design system consisted on colors, controls, whole pages, icons and fonts.</li>
        </ul>
        <h3>Documentation of processes and project features</h3>
        <ul>
            <li>Documentation and guides for several features and processes of the projects we had were done with Confluence.</li>
            <li>Development documents were made in Microsoft Word, uploaded to a SharePoint and then added to a table in Confluence for future reference.</li>
        </ul>

        <br/><hr/><br/>

        <h2>Personal</h2>
        <p>This page is my main project. Is still in development, and I try to use several tools to keep practicing</p>
        <ul>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>MaterialUI</li>
            <li>Git</li>
            <li>Figma</li>
        </ul>
        <p>The goal is creating a web page for my personal projects, and create a blog where I can upload my thoughts on music and tech.</p>

        <br/><hr/><br/>

        <h1>Figma wireframes and prototypes</h1>
        <br/>

        <ImageList sx={{ width: '100%', height: 500 }} cols={3} gap={20} rowHeight={200}>
            {itemData.map((item) => (
                <ImageListItem
                key={item.img}
                >
                <img
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.title}
                    title={item.title}
                    loading="lazy"
                />
                </ImageListItem>
            ))}
        </ImageList>
    </div>)
}