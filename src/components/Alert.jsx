import Alert from "react-bootstrap/Alert";

const FirstAlert = function () {
  return (
    <Alert variant="dark">
      <Alert.Heading>Welcome</Alert.Heading>
      <p>Benvenuto su CineShop! Scopri i migliori film in DVD, Blu-ray e digital download. Buona visione!</p>
      <hr />
      <p className="mb-0">Dove ogni acquisto è da Oscar… o almeno da pop-corn! 🍿</p>
    </Alert>
  );
};

export default FirstAlert;
