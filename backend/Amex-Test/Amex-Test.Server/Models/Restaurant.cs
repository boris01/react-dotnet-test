namespace Amex_Test.Server.Models
{
    public record Restaurant
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password {  get; set; }
        public string[] Ads { get; set; }


    }
}
