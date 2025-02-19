const getFlags = (str = "") => {
  const countries = {
    US: "https://flagcdn.com/w320/us.png",
    UK: "https://flagcdn.com/w320/gb.png",
    "United States": "https://flagcdn.com/w320/us.png",
    Canada: "https://flagcdn.com/w320/ca.png",
    "United Kingdom": "https://flagcdn.com/w320/gb.png",
    Germany: "https://flagcdn.com/w320/de.png",
    France: "https://flagcdn.com/w320/fr.png",
    Italy: "https://flagcdn.com/w320/it.png",
    Spain: "https://flagcdn.com/w320/es.png",
    Japan: "https://flagcdn.com/w320/jp.png",
    China: "https://flagcdn.com/w320/cn.png",
    India: "https://flagcdn.com/w320/in.png",
    Brazil: "https://flagcdn.com/w320/br.png",
    Australia: "https://flagcdn.com/w320/au.png",
    Russia: "https://flagcdn.com/w320/ru.png",
    Mexico: "https://flagcdn.com/w320/mx.png",
    "South Africa": "https://flagcdn.com/w320/za.png",
    Turkey: "https://flagcdn.com/w320/tr.png",
    Egypt: "https://flagcdn.com/w320/eg.png",
    Indonesia: "https://flagcdn.com/w320/id.png",
    Philippines: "https://flagcdn.com/w320/ph.png",
    Vietnam: "https://flagcdn.com/w320/vn.png",
    Ukraine: "https://flagcdn.com/w320/ua.png",
    Pakistan: "https://flagcdn.com/w320/pk.png",
    Bangladesh: "https://flagcdn.com/w320/bd.png",
    Nigeria: "https://flagcdn.com/w320/ng.png",
    "Saudi Arabia": "https://flagcdn.com/w320/sa.png",
    Qatar: "https://flagcdn.com/w320/qa.png",
    Iran: "https://flagcdn.com/w320/ir.png",
    Iraq: "https://flagcdn.com/w320/iq.png",
    Lebanon: "https://flagcdn.com/w320/lb.png",
    Syria: "https://flagcdn.com/w320/sy.png",
    Yemen: "https://flagcdn.com/w320/ye.png",
    Oman: "https://flagcdn.com/w320/om.png",
    Sudan: "https://flagcdn.com/w320/sd.png",
    Tunisia: "https://flagcdn.com/w320/tn.png",
    Ethiopia: "https://flagcdn.com/w320/et.png",
    Kuwait: "https://flagcdn.com/w320/kw.png",
    Somalia: "https://flagcdn.com/w320/so.png",
    Afghanistan: "https://flagcdn.com/w320/af.png",
    Bhutan: "https://flagcdn.com/w320/bt.png",
    Bolivia: "https://flagcdn.com/w320/bo.png",
    Peru: "https://flagcdn.com/w320/pe.png",
    Colombia: "https://flagcdn.com/w320/co.png",
    Venezuela: "https://flagcdn.com/w320/ve.png",
    Guyana: "https://flagcdn.com/w320/gy.png",
    Suriname: "https://flagcdn.com/w320/sr.png",
    "French Guiana": "https://flagcdn.com/w320/gf.png",
    Guyana: "https://flagcdn.com/w320/gy.png",
    Martinique: "https://flagcdn.com/w320/mq.png",
    "Bassas da India": "https://flagcdn.com/w320/bi.png",
    Bolivie: "https://flagcdn.com/w320/bo.png",
    Guyana: "https://flagcdn.com/w320/gy.png",
    Suriname: "https://flagcdn.com/w320/sr.png",
    Denmark: "https://flagcdn.com/w320/dk.png",
    Sweden: "https://flagcdn.com/w320/se.png",
    Norway: " https://flagcdn.com/w320/no.png",
  };

  return str.split(",").map((country, index) => {
    const key = country.trim();
    return (
      <img
        key={index}
        src={countries[key]}
        alt={key}
        title={key}
        style={{ width: "30px", height: "20px", marginRight: "5px" }}
      />
    );
  });
};

export default getFlags;
