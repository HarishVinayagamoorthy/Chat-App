/** @format */

// USING AXIOS............

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${import.meta.env.VITE_URL}/api/user`, {
          withCredentials: true,
        });
        const data = res.data;
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { loading, conversations };
};
export default useGetConversations;

// WITHOUT USING AXIOS==============================================

// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";

// const useGetConversations = () => {
// 	const [loading, setLoading] = useState(false);
// 	const [conversations, setConversations] = useState([]);

// 	useEffect(() => {
// 		const getConversations = async () => {
// 			setLoading(true);
// 			try {
// 				const res = await fetch(`${import.meta.env.VITE_URL}/api/user`);
// 				const data = await res.json();
// 				if (data.error) {
// 					throw new Error(data.error);
// 				}
// 				setConversations(data);
// 			} catch (error) {
// 				toast.error(error.message);
// 			} finally {
// 				setLoading(false);
// 			}
// 		};

// 		getConversations();
// 	}, []);

// 	return { loading, conversations };
// };
// export default useGetConversations;
