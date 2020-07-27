/**
 * Descriptor name type
 */
export enum DescriptorNameType {
  String = 2 ** 1,

  Symbol = 2 ** 2,

  Number = 2 ** 3,

  Int = 2 ** 3 | Number,

  Float = 2 ** 4 | Number,

  NonNegative = 2 ** 5 | Number,

  Index = NonNegative | Int,

  Zero = 2 ** 6 | NonNegative,

  Positive = 2 ** 7 | NonNegative,
  
  Negative = 2 ** 8 | Number
}

/**
 * Descriptor value type
 */
export enum DescriptorValueType {
  Normal = 2 ** 1,

  Accessor = 2 ** 2,

  Getter = 2 ** 3 | Accessor,

  Setter = 2 ** 4 | Accessor,
  
  Result = 2 ** 5 | Accessor
}