import { Reveal } from "./Reveal";
import type { ProductSpec } from "@/lib/data";

export function SpecTable({ specs }: { specs: ProductSpec[] }) {
  return (
    <Reveal className="w-full">
      <div className="card overflow-hidden">
        <div className="border-b border-ink-100 bg-ink-50/60 px-5 py-3.5">
          <h4 className="font-display text-sm font-semibold text-ink-900">Technical specifications</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[34rem] border-collapse text-sm">
            <tbody className="divide-y divide-ink-100">
              {specs.map((spec, i) => (
                <tr key={spec.label} className={i % 2 === 1 ? "bg-ink-50/40" : ""}>
                  <th scope="row" className="whitespace-nowrap px-5 py-3 text-left font-medium text-ink-600">
                    {spec.label}
                  </th>
                  <td className="whitespace-nowrap px-5 py-3 text-right font-semibold text-ink-900">
                    {spec.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Reveal>
  );
}
