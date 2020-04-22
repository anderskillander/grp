import style from "./Style/initiativeCard.module.scss";
import { useRef, useEffect } from "react";

const InitiativeCard = ({ data }) => {
  const policy = useRef();
  const knowledge = useRef();
  const money = useRef();
  const idea = useRef();

  let url =
    data.url.indexOf("www.") > -1 ? data.url.split("www.")[1] : data.url;
  url = url.indexOf("://") > -1 ? url.split("://")[1] : url;
  url = url.indexOf("/") > -1 ? url.split("/")[0] : url;

  url = url.length < 1 ? "🙅🏼‍♂️" : url;

  useEffect(() => {
    if (data.policy_planning !== "1") {
      policy.current.style.opacity = "0.3";
    }
    if (data.knowledge_learning !== "1") {
      knowledge.current.style.opacity = "0.3";
    }
    if (data.finance_budgets !== "1") {
      money.current.style.opacity = "0.3";
    }
    if (data.practice_innovation !== "1") {
      idea.current.style.opacity = "0.3";
    }
  }, []);

  return (
    <div className={style.initiativeCard}>
      <h1 className={style.title}>{data.name}</h1>
      <a href={data.url}>{url}</a>
      <p>{data.summary}</p>
      <div className={style.icons}>
        <img ref={policy} src="/policy.png"></img>
        <img ref={knowledge} src="/knowledge.png"></img>
        <img ref={money} src="/money.png"></img>
        <img ref={idea} src="/idea.png"></img>
      </div>
    </div>
  );
};

export default InitiativeCard;