//@ts-ignore
import hanspell from "hanspell";

const sentense = "그럿게 말하지마 감기 얼른 낳아";

async function main() {
  const end = function () {
    console.log("검사 종료");
  };
  function error(err: any) {
    console.error("// error: " + err);
  }

  const check = (json: any) => {
    console.log(json);
  };

  hanspell.spellCheckByPNU(sentense, 6000, check, end, error);
}

main();
