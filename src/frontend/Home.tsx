import React from 'react';
// @ts-ignore
import wildBear from '../assets/wild-bear.jpg';
// @ts-ignore
import urbanBear from '../assets/urban-bear.jpg';
import '../../index.css';

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <h1>Welcome to our wildlife website</h1>
            <section className="bear-section">
                <h2>The Trouble with Bears</h2>
                <p className="author">By Evan Wild</p>
                <p className="intro">
                    Tall, lumbering, angry, dangerous. The real live bears of this world are proud, independent creatures, self-serving, and always on the hunt for food. Nothing like the bears you see on TV, like Baloo from renowned documentary, The Jungle Book.
                </p>

                <h3>Types of Bear</h3>
                <table className="bear-table">
                    <thead>
                    <tr>
                        <th>Bear Type</th>
                        <th>Coat</th>
                        <th>Adult Size</th>
                        <th>Habitat</th>
                        <th>Lifespan</th>
                        <th>Diet</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Wild</td>
                        <td>Brown or black</td>
                        <td>1.4 to 2.8 meters</td>
                        <td>Woods and forests</td>
                        <td>25 to 28 years</td>
                        <td>Fish, meat, plants</td>
                    </tr>
                    <tr>
                        <td>Urban</td>
                        <td>North Face</td>
                        <td>18 to 22</td>
                        <td>Condos and coffee shops</td>
                        <td>20 to 32 years</td>
                        <td>Starbucks, sushi</td>
                    </tr>
                    </tbody>
                </table>

                <h3>Habitats and Eating Habits</h3>
                <p className="habitat-info">
                    Wild bears eat a variety of meat, fish, fruit, nuts, and other naturally growing ingredients. Urban bears, on the other hand, scavenge from urban food outlets like dumpsters and fast food joints.
                </p>

                <div className="bear-images">
                    <div className="bear-image">
                        <img src={wildBear} alt="Wild Bear" />
                        <p>Wild Bear</p>
                    </div>
                    <div className="bear-image">
                        <img src={urbanBear} alt="Urban Bear" />
                        <p>Urban Bear</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
