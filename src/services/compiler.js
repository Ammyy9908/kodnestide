import axios from "axios";

const executeCode = async (
  language_id,
  source_code,
  stdin,
  expected_output = ""
) => {
  try {
    const r = await axios.post(
      `https://staging-api.kodnest.in/compiler-service/api/v1/submission?base64Encoded=true&wait=false`,
      {
        language_id: language_id,
        source_code: source_code,
        stdin: stdin,
        expected_output: expected_output,
      }
    );
    return r.data;
  } catch (e) {
    if (e.response && e.response.data) {
      return e.response.data;
    }
  }
};

export default executeCode;
