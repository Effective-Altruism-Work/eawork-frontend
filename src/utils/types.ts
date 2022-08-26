export type TagTypeName =
  | "tags_role_type"
  | "tags_skill"
  | "tags_country"
  | "tags_city"
  | "tags_workload"
  | "tags_area"
  | "tags_degree_required"
  | "tags_immigration"
  | "tags_location_type"
  | "tags_generic";

export type Tag = { pk?: number; text: string; count?: number };