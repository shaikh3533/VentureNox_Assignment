import axios from "axios";


class GetData {
    BLogData = () => {
        const res = async () => {
            const resp = await axios
                .get("https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/")
                .catch(function (error) {
                    console.log(error);
                });
            return resp;
        };
        return res();
    };

    BlogDetail = (id) => {
        const res = async () => {
            const resp = await axios
                .get(`https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/${id}`)
                .catch(function (error) {
                    console.log(error);
                });
            return resp;
        };
        return res();
    };
};
export default new GetData();