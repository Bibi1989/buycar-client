import qs from "qs";

export const searchParams = (history: any, obj: any) => {
  let query = `make=${obj.make}&model=${obj.model}&min=${obj.min}&max=${obj.max}`;
  history.push(`?${query}`);
};
export const viewCarParams = (history: any, obj: any) => {
  let query = `make=${obj.make}&model=${obj.model}&id=${obj.id}`;
  history.push(`car?${query}`);
};

export function useQuery(useLocation: any) {
  let query = qs.parse(useLocation().search);
  let obj: any = {};
  for (let q in query) {
    let a = q.replace("?", "");
    obj[a] = query[q];
  }
  return obj;
}
