import { React, useEffect, useRef } from "react";
import BenchmarkingForm from "../../components/keywordBenchmarkingPage/BenchmarkingForm";
import { useState } from "react";
import BenchmarkingPreview from "../../components/keywordBenchmarkingPage/BenchmarkingPreview";
import { useReactToPrint } from "react-to-print";
import { Button } from "react-bootstrap";

const KeywordsBenchmarkingPage = () => {
  const [data, setData] = useState([]);
  const componentRef = useRef(null);
  const pageStyle = `
  @media print {
    @page { size: auto; }
  }
  
  @page {
    margin-top: 2cm;
    margin-bottom: 2cm;
    margin-left: 2cm;
    margin-right: 2cm;
    height: initial !important;
    overflow: initial !important;
    -webkit-print-color-adjust: exact;
}


`;

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle,
  });

  const getData = (data) => {
    setData(data);
  };

  useEffect(() => {
    console.log("data received=>" + JSON.stringify(data));
  }, [data]);
  const main_styles = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
  };

  return (
    <div style={main_styles}>
      <BenchmarkingForm getData={getData} />

      {data.length > 0 && (
        <div>
          <BenchmarkingPreview data={data} ref={componentRef} />
          <Button
            onClick={handlePrint}
            variant="success"
            style={{ margin: "1px" }}
            size="sm"
          >
            Print
          </Button>
        </div>
      )}
    </div>
  );
};

export default KeywordsBenchmarkingPage;
