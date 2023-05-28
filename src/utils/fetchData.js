
export const exerciseOptions =  {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1144e44640msh866aeea4e26f4fbp129e3cjsnabc82c7aa74f',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions =  {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1144e44640msh866aeea4e26f4fbp129e3cjsnabc82c7aa74f',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const BMIOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1144e44640msh866aeea4e26f4fbp129e3cjsnabc82c7aa74f',
        'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
    }
};



export const fetchData = async (url, options) => {
    try{
        const response  = await fetch(url, options);
        const data = await response.json();
        return data;
    }catch (error){
        console.log(error)
    }

};
