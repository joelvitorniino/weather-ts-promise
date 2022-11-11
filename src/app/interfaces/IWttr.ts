export interface IWttr {
    current_condition: [
        {
            FeelsLikeC: string;
            humidity: string;
            lang_pt: [
                {
                    value: string;
                }
            ],

            temp_C: string;
        }
    ]
}