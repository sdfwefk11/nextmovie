interface MovieOverviewProps {
  overview: string;
}

export function MovieOverview({ overview }: MovieOverviewProps) {
  return (
    <div className="p-3 text-center flex items-center justify-center">
      <p className="text-muted-foreground text-lg">{overview}</p>
    </div>
  );
}
