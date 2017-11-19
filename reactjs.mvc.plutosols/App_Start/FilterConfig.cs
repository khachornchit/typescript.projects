using System.Web;
using System.Web.Mvc;

namespace reactjs.mvc.plutosols
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
