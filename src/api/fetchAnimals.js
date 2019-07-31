export const fetchAnimals = async () => {
    try {
        const response = await fetch('http://localhost:3001/api/v1/rescue-animals');
        if (!response.ok) {
            throw new Error('Error fetching animals');
        }
        const animals = await response.json();
        return animals;
    } catch (error) {
        throw new Error(error.message);
    }
}