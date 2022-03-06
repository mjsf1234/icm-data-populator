export const getHeadersString = (headers) => Object.values(headers).join(", ");

export const getDefaultValuesString = (headers, values) =>
  Object.keys(values)
    .map((k) => {
      let defVal = values[k];

      if (Array.isArray(defVal)) {
        defVal = `[${defVal.join(", ")}]`;
      }

      return `${headers[k]} = ${defVal}`;
    })
    .join(", ");

export const generateCsvObject = ({
  commonAttributesObject,
  csvString,
  headersObject,
  defaultValuesObject,
  delemeter = "\t",
}) => {
  const headersKeysArray = Object.keys(headersObject);
  const headersArray = Object.values(headersObject);

  let lines = csvString.split("\n");
  lines = lines.filter((line) => line);


  let csvArray = lines.map((line) => {
    let values = line.replaceAll('"', "").split(delemeter);

    let csvElement = headersArray.reduce((acc, header, index) => {
      let value;
      if (values[index]) {
        value = !isNaN(values[index]) ? +values[index] : values[index];
      } else {
        value = defaultValuesObject[headersKeysArray[index]];
      }

      acc[header] = value;

      return acc;
    }, {});

    Object.keys(commonAttributesObject).forEach((k) => {
      csvElement[k] = commonAttributesObject[k];
    });

    return csvElement;
  });

  return csvArray;
};
