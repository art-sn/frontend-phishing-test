import React, {useEffect, useState} from "react";
import config from "../../shared/api/config";

const statusColors: {
    [key in PhishingAttemptStatuses]: string
} = {
    pending: 'orange',
    success: 'green'

}
export const AttemptsList = () => {
    const [data, setData] = useState<PhishingAttemptType[]>([])
    useEffect(() => {
        config.get('/phishing/attempts').then(res => setData(res.data));
    }, []);
    return (<div>
            {
                data.map((attempt) => (
                    <div key={attempt._id} style={{
                        marginBottom: 20,
                        padding: 10,
                        border: '1px dotted black',
                        marginTop: 20,
                        borderRadius: 5
                    }}>
                        <div>
                            <div>
                                email: <span style={{color: 'blue'}}> {attempt.email}</span>
                            </div>
                            <p>Content: <span dangerouslySetInnerHTML={{__html: attempt.emailContent}}
                                              style={{color: 'blue'}}/></p>
                            <div>
                                <p> Status: <span style={{color: statusColors[attempt.status]}}>{attempt.status}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }</div>
    )
}

type PhishingAttemptType = {
    _id: string
    emailContent: string;
    status: PhishingAttemptStatuses;
    email: string;
}

type PhishingAttemptStatuses = 'pending' | 'success'