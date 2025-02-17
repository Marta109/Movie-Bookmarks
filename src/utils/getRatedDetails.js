const getRatedDetails = (rated, elem) => {
  const ratingDetails = {
    G: { symbol: "🟢", description: "General Audience" },
    PG: { symbol: "🟡", description: "Parental Guidance Suggested" },
    "PG-13": {
      symbol: "🟠",
      description: "Parents Strongly Cautioned (Under 13)",
    },
    R: {
      symbol: "🔴⚠️",
      description:
        "Restricted (Under 17 requires accompanying parent or adult guardian)",
    },
    "NC-17": { symbol: "🔴🔞", description: "Adults Only" },
  };

  if (elem) {
    return (
      <div title={ratingDetails[rated]?.description || ""}>
        {rated}&nbsp;&nbsp;&nbsp;&nbsp; 
        <span>{ratingDetails[rated]?.symbol}</span>
      </div>
    );
  }

  return (
    <td title={ratingDetails[rated]?.description || ""}>
      {rated}
      <span>{ratingDetails[rated]?.symbol}</span>
    </td>
  );
};

export default getRatedDetails;
