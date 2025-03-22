import { Month } from "@/pages/Month";
import { Create } from "@/pages/months/Create";
import { Update } from "@/pages/months/Update";
import { Route } from "react-router";

export const MonthRouter = (
  <>
    <Route index element={<Month />} />
    <Route path="create" element={<Create />} />
    <Route path="edit/:id" element={<Update />} />
  </>
)
