import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowRight } from "lucide-react";

const menu = ["Design", "Development", "Marketing", "Business"];

export function ArticleFilterTable() {
  return (
    <Table className="border-1 border-gray-200 rounded-md">
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold text-lg">Categories</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {menu.map((item, i) => (
          <TableRow key={i}>
            <TableCell className="font-medium text-base flex justify-between text-muted-foreground items-center">
              {item}
              <ArrowRight size={20} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
