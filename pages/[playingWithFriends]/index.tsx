import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const index = () => {
    const router = useRouter();
    const [path, setPath]: string | any = useState(null);
    const [player, setPlayer]:any = useState(null);

    const Cryptr = require('cryptr');
    const cryptr = new Cryptr('myTotalySecretKey');

    useEffect(() => {
        setPath(router.asPath.substring(1));
    }, [])

    useEffect(() => {
        if (path) {
            const decryptedString = cryptr.decrypt(path);
            setPlayer(decryptedString);
        }
    }, [path])


    return (
        <div>{player}</div>
    )
}

export default index