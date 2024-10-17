import React from 'react';
import wildBear from '../assets/wild-bear.jpg';
import urbanBear from '../assets/urban-bear.jpg';
import Comments from '../components/Comments'; // Import the Comments component

const Bears: React.FC = () => {
    return (
        <div className="bears-page">
            <h1>The Trouble with Bears</h1>
            <p>
                Tall, lumbering, angry, dangerous. The real live bears of this world are proud, independent creatures, self-serving, and always on the hunt for food.
            </p>
            <h2>Types of Bears</h2>
            <p>
                Bears come in two varieties — large and medium. You don't get small bears. If you have seen a small bear, it was probably a cub.
            </p>
            <div className="bear-info">
                <div className="bear-section">
                    <h3>Wild Bears</h3>
                    <img src={wildBear} alt="Wild Bear" />
                    <p>
                        Wild bears eat a variety of meat, fish, fruit, nuts, and other naturally growing ingredients. They tend to live in relative isolation, in caves or forests.
                    </p>
                </div>
                <div className="bear-section">
                    <h3>Urban Bears</h3>
                    <img src={urbanBear} alt="Urban Bear" />
                    <p>
                        Urban bears scavenge from readily available urban food outlets like dumpsters and fast food joints.
                    </p>
                </div>
            </div>

            {/* Include the Comments component */}
            <Comments />

        </div>
    );
};

export default Bears;
