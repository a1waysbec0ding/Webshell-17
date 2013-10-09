
function command_parser()
{
    var command = {};

    this.parse = function(cmd_array, term)
    {
        var name = cmd_array.shift();

        switch (name)
        {
            case "help":
                print_help_help(term);
                break;
            case "machine":
                print_help_machine(term);
                break;
            case "job":
                break;
            default:
                break;
        }
    }


    function print_help_help(term)
    {
        var help = [
                       "Usage: help  [command]\n",
                       "Description: By default, it displays all the commands supported in this tool. if the command is specified,",
                       "\tIt will print out the corresponding help info of the command.",
                       "Commands:",
                       "\tmachine - list, search, and send job to machines which is managed by the system.",
                       "\tjob     - list, track the running machine.",
                       "\n"
                   ];
        _print_help(help, term);
    }
    
    function print_help_machine(term)
    {
        var help = [
                       "Usage: machine [options] [id]\n",
                       "Description: if no options specified, this command will print all the machines in the system.",
                       "\t\tif machine id is specified, the detail info of that machine will be displayed.",
                       "Options:",
                       "\t-h - print this help infomation.",
                       "\t-l - list, search, and send job to machines which is managed by the system.",
                       "\t-s - list, track the running machine.",
                       "\n"
                   ];
        _print_help(help, term);

    }

    function print_help_job()
    {
    }


    function _print_help( helps, term )
    {
        $.each(helps, function(index, line){
            term.echo(line);
        }); 
    }

}