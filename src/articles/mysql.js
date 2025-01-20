const MysqlArticle = () => {
    return (
        <div>
            <p>For long I've had an on and off relationship with mysql.</p>
            <p>I could not connect to a new server</p>
            <p>mysql -vh hostip -P port (3306) -u user -p</p>
            <p>Connection was refused so I resorted to the last option. </p>
            <p>vim /etc/mysql/mysql.conf.d/mysqld.cnf</p>
            <p>bind-address  = 0.0.0.0</p>
            <p>sudo ufw allow 3306</p>
            <p>telnet ip 3306</p>
            <p>Now the host could be reached.</p>
        </div>
    )
}