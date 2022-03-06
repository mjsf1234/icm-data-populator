import { React, forwardRef } from "react";
import "../../../styles/keywordBenchmarking/BenchmarkingPreview/index.css";
import { Button } from "react-bootstrap";

const BenchmarkingPreview = forwardRef(({ data }, ref) => {
  return (
    <div className="BenchmarkingPreview">
      <div className="benchmark-main">
        {data.length > 0 && (
          <pre ref={ref}>{JSON.stringify(data, null, 3)}</pre>
        )}
      </div>

      <Button> Submit</Button>
    </div>
  );
});
export default BenchmarkingPreview;
