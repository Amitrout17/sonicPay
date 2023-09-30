const gateWay = async (req, res) => {
  try {
    const { voiceData } = req.body;

    //redirection required for nlp processing

    console.log(voiceData);
    res.status(200).json({
      sucess: "true",
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

module.exports = gateWay;
