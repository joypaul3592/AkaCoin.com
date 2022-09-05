import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoadmin] = useState(true);

    useEffect(() => {
        const email = user?.email;
        console.log(email)

        if (email) {
            fetch(`https://aqueous-caverns-01571.herokuapp.com/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setAdmin(data?.admin);
                    setAdminLoadmin(false)
                })
        }


    }, [user])
    return [admin, adminLoading]
}

export default useAdmin;