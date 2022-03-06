import { React, useEffect, useState } from "react";
import "../../../styles/keywordBenchmarking/BenchmarkingForm/index.css";
import Papa from "papaparse";
import useForm from "../../../hooks/useForm";
import { Button, Form } from "react-bootstrap";
import Loader from "../../../commonComponents/Loader";
import { useSelector, useDispatch } from "react-redux";
import keywordReduxThunk from "../../../redux/KeywordsRedux/keywordReduxThunk";

const PRESET_HEADERS = [
  "competition_name",
  "total_pages",
  "last_30_days",
  "authors",
  "total_traffic",
  "traffic_value",
  "domain_ranking",
  "average_ref_domain",
];
const INITIAL_STATE = {
  content_url: [],
};

const BenchmarkingForm = ({ getData }) => {
  const { handleChange, value, clearInput } = useForm(INITIAL_STATE);
  const [csv, setCsv] = useState();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.keyword);

  useEffect(() => {
    dispatch(keywordReduxThunk());
  }, []);

  useEffect(() => {
    console.log("values are", value);
  }, [value]);

  const submitFormHandler = (e) => {
    e.preventDefault();
    readCSV(csv);
  };
  const csvHandler = (e) => {
    setCsv(e.target.files);
  };
  const readCSV = (e) => {
    const files = e;
    if (files) {
      Papa.parse(files[0], {
        complete: function (results) {
          csvJSON(results.data);
        },
      });
    }
  };
  const csvJSON = (csv) => {
    var lines = csv;
    var result = [];
    var header = value.preset_headers.split(",");
    for (var i = 1; i < lines.length; i++) {
      var obj = {};
      var currentline = lines[i].toString().split(",");
      for (var j = 0; j < header.length; j++) {
        obj[header[j]] = currentline[j];
      }
      obj["keyword"] = value.keyword;
      obj["content_url"] = value.content_url;
      result.push(obj);
    }
    getData(result);
  };

  return (
    <div style={{ margin: "3rem" }}>
      <h1>FormField</h1>
      {loading && <Loader />}
      <Form onSubmit={submitFormHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Keyword</Form.Label>
          <Form.Select name="keyword" onChange={handleChange}>
            {data.length > 0
              ? data.map((e, index) => {
                  return (
                    <option key={index} value={e.keyword_id}>
                      {e.keyword_name}
                    </option>
                  );
                })
              : console.log("NULL!!")}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Headers</Form.Label>

          <Form.Select
            name="preset_headers"
            aria-label="Default select example"
            onChange={handleChange}
          >
            <option>Open this select menu</option>
            <option value={PRESET_HEADERS}>_HEADERS_1</option>
          </Form.Select>
          <Form.Text className="text-muted">
            Enter commas seperated headers
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Choose CSV file</Form.Label>
          <Form.Control type="file" onChange={csvHandler} name="csv" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Preview
        </Button>
      </Form>
      <br></br>
    </div>
  );
};
export default BenchmarkingForm;
