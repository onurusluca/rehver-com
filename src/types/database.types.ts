export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      places: {
        Row: {
          address: string | null;
          categories: string[] | null;
          city: string | null;
          claim_status: string | null;
          claimed_by: string | null;
          click_count: number | null;
          closed: boolean | null;
          created_at: string | null;
          description_en: string | null;
          description_tr: string | null;
          district: string | null;
          email: string | null;
          extra_info_en: string | null;
          extra_info_tr: string | null;
          facebook_uri: string | null;
          features_summary_en: string | null;
          features_summary_tr: string | null;
          g_id: string | null;
          g_maps_uri: string | null;
          id: string;
          image_urls: string[] | null;
          instagram_uri: string | null;
          languages: string[] | null;
          latitude: number | null;
          longitude: number | null;
          main_category: string;
          name: string;
          name_en: string | null;
          neighborhood: string | null;
          opening_hours: Json | null;
          phone_number: string | null;
          postal_code: string | null;
          products_services_en: Json | null;
          products_services_tr: Json | null;
          rating: number | null;
          reviews_count: number | null;
          seo_keywords: Json | null;
          slug: string | null;
          status: string | null;
          street: string | null;
          tags_en: string[] | null;
          tags_tr: string[] | null;
          tiktok_uri: string | null;
          updated_at: string | null;
          verified: boolean | null;
          verified_at: string | null;
          verified_by: string | null;
          view_count: number | null;
          website_uri: string | null;
          youtube_uri: string | null;
        };
        Insert: {
          address?: string | null;
          categories?: string[] | null;
          city?: string | null;
          claim_status?: string | null;
          claimed_by?: string | null;
          click_count?: number | null;
          closed?: boolean | null;
          created_at?: string | null;
          description_en?: string | null;
          description_tr?: string | null;
          district?: string | null;
          email?: string | null;
          extra_info_en?: string | null;
          extra_info_tr?: string | null;
          facebook_uri?: string | null;
          features_summary_en?: string | null;
          features_summary_tr?: string | null;
          g_id?: string | null;
          g_maps_uri?: string | null;
          id?: string;
          image_urls?: string[] | null;
          instagram_uri?: string | null;
          languages?: string[] | null;
          latitude?: number | null;
          longitude?: number | null;
          main_category: string;
          name: string;
          name_en?: string | null;
          neighborhood?: string | null;
          opening_hours?: Json | null;
          phone_number?: string | null;
          postal_code?: string | null;
          products_services_en?: Json | null;
          products_services_tr?: Json | null;
          rating?: number | null;
          reviews_count?: number | null;
          seo_keywords?: Json | null;
          slug?: string | null;
          status?: string | null;
          street?: string | null;
          tags_en?: string[] | null;
          tags_tr?: string[] | null;
          tiktok_uri?: string | null;
          updated_at?: string | null;
          verified?: boolean | null;
          verified_at?: string | null;
          verified_by?: string | null;
          view_count?: number | null;
          website_uri?: string | null;
          youtube_uri?: string | null;
        };
        Update: {
          address?: string | null;
          categories?: string[] | null;
          city?: string | null;
          claim_status?: string | null;
          claimed_by?: string | null;
          click_count?: number | null;
          closed?: boolean | null;
          created_at?: string | null;
          description_en?: string | null;
          description_tr?: string | null;
          district?: string | null;
          email?: string | null;
          extra_info_en?: string | null;
          extra_info_tr?: string | null;
          facebook_uri?: string | null;
          features_summary_en?: string | null;
          features_summary_tr?: string | null;
          g_id?: string | null;
          g_maps_uri?: string | null;
          id?: string;
          image_urls?: string[] | null;
          instagram_uri?: string | null;
          languages?: string[] | null;
          latitude?: number | null;
          longitude?: number | null;
          main_category?: string;
          name?: string;
          name_en?: string | null;
          neighborhood?: string | null;
          opening_hours?: Json | null;
          phone_number?: string | null;
          postal_code?: string | null;
          products_services_en?: Json | null;
          products_services_tr?: Json | null;
          rating?: number | null;
          reviews_count?: number | null;
          seo_keywords?: Json | null;
          slug?: string | null;
          status?: string | null;
          street?: string | null;
          tags_en?: string[] | null;
          tags_tr?: string[] | null;
          tiktok_uri?: string | null;
          updated_at?: string | null;
          verified?: boolean | null;
          verified_at?: string | null;
          verified_by?: string | null;
          view_count?: number | null;
          website_uri?: string | null;
          youtube_uri?: string | null;
        };
        Relationships: [];
      };
      seo_pages: {
        Row: {
          category: string | null;
          city: string;
          created_at: string;
          description_en: string;
          description_tr: string;
          district: string | null;
          id: string;
          keyword_variations: string[];
          place_ids: string[];
          places_count: number;
          slug_en: string;
          slug_tr: string;
          title_en: string;
          title_tr: string;
          updated_at: string | null;
        };
        Insert: {
          category?: string | null;
          city?: string;
          created_at?: string;
          description_en: string;
          description_tr: string;
          district?: string | null;
          id?: string;
          keyword_variations: string[];
          place_ids: string[];
          places_count: number;
          slug_en: string;
          slug_tr: string;
          title_en: string;
          title_tr: string;
          updated_at?: string | null;
        };
        Update: {
          category?: string | null;
          city?: string;
          created_at?: string;
          description_en?: string;
          description_tr?: string;
          district?: string | null;
          id?: string;
          keyword_variations?: string[];
          place_ids?: string[];
          places_count?: number;
          slug_en?: string;
          slug_tr?: string;
          title_en?: string;
          title_tr?: string;
          updated_at?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      generate_unique_short_id: {
        Args: { table_name: string };
        Returns: string;
      };
      slugify: {
        Args: { input_text: string };
        Returns: string;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DefaultSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
      DefaultSchema["Views"])
  ? (DefaultSchema["Tables"] &
      DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
  ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
  : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
  ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never;

export const Constants = {
  public: {
    Enums: {},
  },
} as const;
