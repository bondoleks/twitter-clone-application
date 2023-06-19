import { useCallback, useEffect, useState } from 'react';
import {api} from "../redux/service/api";

export const useFetch = ({
    instant = true,
    initData = null,
    onCompleted = (data) => data,
    dataTransformer = (data) => data,
    onError = (err) => err,
    ...axios
}) => {
    const [data, setData] = useState(initData);
    const [loading, setLoading] = useState(false);

    const fetcher = useCallback(
        (options) => {
            const fetchOptions = { ...axios, ...options };
            if (fetchOptions.paramsStringify) {
                fetchOptions.url = `${fetchOptions.url}?${JSON.stringify(
                    fetchOptions.paramsStringify
                )}`;
            }

            setLoading(true);

            return api(fetchOptions)
                .then(dataTransformer)
                .then((res) => {
                    setData(res);
                    onCompleted(res, options);
                    return res;
                })
                .catch(onError)
                .finally(() => {
                    setLoading(false);
                });
        },
        // eslint-disable-next-line
        [onCompleted, dataTransformer]
    );

    useEffect(() => {
        if (instant) {
            fetcher(axios);
        }
        // eslint-disable-next-line
    }, []);

    return [
        {
            data,
            loading,
            modifyData: setData
        },
        fetcher
    ];
};


// import { useCallback, useEffect, useState } from 'react';
// import { api } from "../redux/service/api";

// export const useFetch = ({
//     instant = true,
//     initData = null,
//     onCompleted = (data) => data,
//     dataTransformer = (data) => data,
//     onError = (err) => err,
//     ...axios
// }) => {
//     const [data, setData] = useState(initData);
//     const [loading, setLoading] = useState(false);

//     const fetcher = useCallback(
//         (options) => {
//             const fetchOptions = { ...axios, ...options };
//             if (fetchOptions.paramsStringify) {
//                 fetchOptions.url = `${fetchOptions.url}?${JSON.stringify(
//                     fetchOptions.paramsStringify
//                 )}`;
//             }

//             setLoading(true);

//             const formData = new FormData(); // Create a FormData object

//             // Add the request data to the FormData object
//             for (const key in fetchOptions.data) {
//                 formData.append(key, fetchOptions.data[key]);
//             }

//             fetchOptions.headers = {
//                 ...fetchOptions.headers,
//                 'Content-Type': 'multipart/form-data' // Set the Content-Type header
//             };

//             return api({
//                 ...fetchOptions,
//                 data: formData // Use the FormData object as the request data
//             })
//                 .then(dataTransformer)
//                 .then((res) => {
//                     setData(res);
//                     onCompleted(res, options);
//                     return res;
//                 })
//                 .catch(onError)
//                 .finally(() => {
//                     setLoading(false);
//                 });
//         },
//         [onCompleted, dataTransformer]
//     );

//     useEffect(() => {
//         if (instant) {
//             fetcher(axios);
//         }
//     }, []);

//     return [
//         {
//             data,
//             loading,
//             modifyData: setData
//         },
//         fetcher
//     ];
// };
