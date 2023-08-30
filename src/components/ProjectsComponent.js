import React from 'react'
import { Row } from 'react-bootstrap';


function ProjectsComponent() {
    return (
        <div>
            <div className="container">
                <div className='row-fix'>
                    <h1 className='projects-title'> PROJECTS</h1>
                </div>
                <Row className='projects-row'>
                    <div className='projects'>
                        <div className='col-lg-3 col-md-12'>
                            <a className='projects-subtitle' href="https://serenityhealth.vercel.app/"  target="_blank">Serenity</a>
                            <p className='projects-desc'>Serenity is my original mental health app, currently being developed by my team and me. Our aim is to provide a secure platform where thousands of people can easily access the help they need and find a safe space to improve their mental health.</p>
                        </div>
                        <div className='col-lg-3 col-md-12'>
                            <a className='projects-subtitle' href="https://advicegenerator-livid.vercel.app/"  target="_blank" >Advice Generator</a>
                            <p className='projects-desc'>The Advice Generator app generates random advice by pulling information from an API. Simply click the button to receive your personalized piece of advice.</p>
                        </div>
                        <div className='col-lg-3 col-md-12'>
                            <a className='projects-subtitle' href="https://hana-c-pokemon-api.vercel.app/"  target="_blank" >PokeDex</a>
                            <p className='projects-desc'>With the Pokedex app, you can search for a specific Pokemon and view its information, or simply click the random button to discover a new Pokemon at random</p>
                        </div>
                        <div className='col-lg-3 col-md-12'>
                            <a className='projects-subtitle' href="https://chanasocialmediadash.vercel.app/"  target="_blank">Social Media Dashboard</a>
                            <p className='projects-desc'>The Social Media Dashboard is a static web application that displays the real-time status of various social media platforms. It provides a simple and easy-to-use interface for users to quickly check the status of their favorite social media platforms.</p>
                        </div>
                        
                    </div>
                </Row>
                

            </div>
        </div>
    )
}

export default ProjectsComponent