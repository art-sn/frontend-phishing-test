import React from 'react';
import {SendPhishingEmailFeature} from "./SendPhishingEmailFeature";
import {AttemptsList} from "./AttemptsList";

interface PhishingAttempt {
    email: string;
    status: string;
    content: string;
}

const PhishingPage: React.FC = () => {
    return (
        <div>
          <SendPhishingEmailFeature />
            <AttemptsList />
        </div>
    );
};

export default PhishingPage;