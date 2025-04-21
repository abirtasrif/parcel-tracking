import DateTimeDisplay from "../components/DateTimeDisplay";
import Finder from "../components/Finder";
import Quote from "../components/Quote";
const Chronopost = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <DateTimeDisplay />
        <Finder currierCompany="Chronopost" />
      </div>
      <Quote />
    </div>
  );
};

export default Chronopost;
