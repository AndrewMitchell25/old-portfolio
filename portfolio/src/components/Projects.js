import React from "react"
import Project from "./Project";

export default function Projects() {
    return(
        <>
            <div className="projects">
                <div className="projects-title">
                    <h1>Projects</h1>
                </div>
                <div className="projects-projects">
                    <div className="container">
                        <Project type={1} 
                            title="Project: Horizon"
                            text="Project: Horizon is a project I created with a team of three other people, Sol Solutions, during a Hackathon 
                            at Notre Dame.
                            The goal of the project is to educate users on the benefits of renewable energy and
                            to encourage homeowners to switch to renewable energy by providing a 
                            free consultation on the benefits of going solar in their local area.
        
                            I was the lead front-end developer on this project and was in charge of creating the actual web-application, 
                            making the database it uses to store users, and connecting the front-end UI to the back-end calculations.
                            It was created using Python, Flask, HTML, and CSS."
                            projLink="https://sol-solutions.herokuapp.com/"
                            gLink="https://github.com/AndrewMitchell25/project-horizon"
                            image={{}}
                        />
                        <Project type={2} 
                            title="Capture The Flag"
                            text="I created this Capture The Flag game using Unity in 2017, during my freshman year of high school.
                            It's a local multiplayer game based off of a prototype I made using Scratch when I was in 7th grade, 
                            which was one of my first experiences with programming.
                            Building games like this one using Unity was how I developed most of my basic programming skills.
                            I even turned the game into a mobile app on my phone, which I am currently working on publishing to the 
                            app store.  
                            Play a demo of the game online "
                            projLink="https://andrewmitchell25.github.io/CTFWebGL/index.html"
                            gLink="https://github.com/AndrewMitchell25/Capture-the-Flag"
                            image={{}}
                        />
                        <Project type={1} 
                            title="Sudoku Solver"
                            text="The sudoku solver is a Python project that I wrote this year, during my spring break.
                            I had a week off from school, and I decided to challenge myself by creating a project
                            that solves sudoku puzzles for you. It uses a backtracking algorithm that tries a number 
                            in each open spot and, when it gets stuck, goes back over the previous numbers it's tried.
                            It continues like this, going back whenever an impossible situation comes up, and solves the
                            whole puzzle using brute force. This project taught me a lot about algorithms and how to think 
                            through a problem completely to come up with a solution.
                            At the moment, it only works in the command line, but I'm currently
                            working towards turning it into an interactive web application that will soon be featured on this website."
                            projLink="https://github.com/AndrewMitchell25/SudokuSolver"
                            gLink="https://github.com/AndrewMitchell25/SudokuSolver"
                            image={{}}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}