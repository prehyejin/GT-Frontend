export const fetcher = (/* data to resolve */data, /* milliseconds */delay=1500)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(data);
        }, delay);
    })
}