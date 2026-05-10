import { AppPageHeader } from "@/components/app-page-header";
import { collections } from "@/data/kosha";

export default function CollectionsPage() {
  return (
    <>
      <AppPageHeader eyebrow="Knowledge collections" title="Collections with owners, permissions, and citation coverage." copy="A collection is not just a vector index. It carries ownership, access policy, freshness, and source quality." />
      <div className="scrollbar-thin overflow-x-auto rounded-xl border border-paper/10 bg-paper/7">
        <div className="grid min-w-[920px] grid-cols-[1.3fr_0.9fr_0.7fr_0.8fr_0.9fr_0.8fr] border-b border-paper/10 p-4 text-xs font-bold uppercase tracking-[0.15em] text-paper/42">
          <span>Collection</span><span>Owner</span><span>Docs</span><span>Coverage</span><span>Permissions</span><span>Freshness</span>
        </div>
        {collections.map((collection) => (
          <div key={collection.name} className="grid min-w-[920px] grid-cols-[1.3fr_0.9fr_0.7fr_0.8fr_0.9fr_0.8fr] items-center border-b border-paper/10 p-4 text-sm last:border-b-0">
            <span className="font-semibold text-paper">{collection.name}</span>
            <span className="text-paper/58">{collection.owner}</span>
            <span className="font-mono text-paper/70">{collection.documents.toLocaleString()}</span>
            <span className="text-teal">{collection.coverage}</span>
            <span className="text-paper/58">{collection.permissions}</span>
            <span className="text-paper/58">{collection.freshness}</span>
          </div>
        ))}
      </div>
    </>
  );
}
