import axios from "axios";
const url = "https://kiwibyte.herokuapp.com/api/topic/";

export default class API{
    //get all topics from server
    static async getAllTopics(){
        const res = await axios.get(url);
        return res.data;

    }

    static async getTopicById(id){
        const res = await axios.get(`${url}/${id}`);
        return res.data;

    }

    // add topics to database
    static async addTopic(topic){
        const res = await axios.post(url,topic);
        return res.data;

    };
    static async updateTopic(id, topic){
        const res = await axios.patch(`${url}/${id}`,topic);
        return res.data;

    };

    static async deleteTopic(id){
        const res = await axios.delete(`${url}/${id}`);
        return res.data;

    };
}
