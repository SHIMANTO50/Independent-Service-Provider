import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div className="first-question mt-3">
                <h2>Q1:Difference between authorization and authentication?</h2>
                <h4>Authentication is the act of confirming a person's identity, whereas authorization is the process of confirming a user's access to specific apps, files, and data.Example-Authentication is the act of checking and confirming an employee's ID and passwords in an organization, whereas authorization is the process of deciding which employee has access to which floor.</h4>
            </div>

            <div className="secon-question mt-5">
                <h2>Q2.Why are you using firebase? What other options do you have to implement authentication?</h2>
                <h4>We use firebase because Users data such as chat messages, user details, and other metadata are stored in the Firebase Database.
                    User-generated content, such as the profile image and multimedia messages, are stored in Firebase Cloud Storage.
                    Firebase Cloud Messaging is a service that allows you to deliver notifications over the internet.
                </h4>
                <h4>Others option to implement authentication is JWT and OAuth 2.0. </h4>
            </div>

            <div className="third-question mt-5">
                <h2>Q3.What other services does firebase provide other than authentication?</h2>
                <h4>There are other services that  firebase provide other than authentication for example-Cloud Firestore,Cloud Functions,Authentication,Hosting,Cloud Storage,    Google Analytics,Predictions,Cloud Messaging.

                </h4>
            </div>
        </div>
    );
};

export default Blogs;