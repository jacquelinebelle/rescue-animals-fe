export const fetchDonations = async () => {
    try {
        const response = await fetch('http://localhost:3001/api/v1/donations');
        if (!response.ok) {
            throw new Error('Error fetching donations');
        }
        const donations = await response.json();
        return donations;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const postDonations = async newDonation => {
    try {
        const response = await fetch('http://localhost:3001/api/v1/donations', {
            method: 'POST',
            body: JSON.stringify({...newDonation}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response)
        if (!response.ok) {
            throw new Error('Error fetching donations');
        }
        const donation = await response.json();
        return donation;
    } catch (error) {
        throw new Error(error.message);
    }
}