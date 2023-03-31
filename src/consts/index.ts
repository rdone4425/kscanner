import cloudflareIpRanges from "~/consts/ip-ranges.json";
import { rangeToIpArray } from "~/helpers/rangeToIpArray";

export const allIps: string[] = cloudflareIpRanges.flatMap((range) =>
  rangeToIpArray(range)
);
